module Types
  class MutationType < Types::BaseObject
    field :create_document, mutation: Mutations::CreateDocument
  end
end
