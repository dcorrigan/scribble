class Mutations::UpdateDocument < Mutations::BaseMutation
  argument :id, GraphQL::Types::ID, required: true
  argument :body, GraphQL::Types::JSON, required: true

  field :errors, [String], null: false
  field :document, Types::DocumentType, null: false

  def resolve(id:, body:)
    doc = Document.find(id)
    doc.body = body
    if doc.save
      { document: doc, errors: [] }
    else
      { document: doc, errors: doc.errors.full_messages }
    end
  rescue ActiveRecord::RecordNotFound
    { document: doc, errors: 'not found' }
  end
end
