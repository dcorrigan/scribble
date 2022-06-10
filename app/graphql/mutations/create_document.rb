class Mutations::CreateDocument < Mutations::BaseMutation
  argument :body, GraphQL::Types::JSON, required: false

  field :errors, [String], null: false
  field :document, Types::DocumentType, null: false

  def resolve(body: nil)
    doc = Document.new(body: body)
    if doc.save
      { document: doc, errors: [] }
    else
      { document: nil, errors: doc.errors.full_messages }
    end
  end
end
