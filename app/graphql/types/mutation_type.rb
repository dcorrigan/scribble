module Types
  class MutationType < Types::BaseObject
    field :create_document, mutation: Mutations::CreateDocument
    field :update_document, mutation: Mutations::UpdateDocument
  end
end
