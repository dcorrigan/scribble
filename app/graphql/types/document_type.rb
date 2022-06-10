# frozen_string_literal: true

module Types
  class DocumentType < Types::BaseObject
    field :id, ID, null: false
    field :body, GraphQL::Types::JSON
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
