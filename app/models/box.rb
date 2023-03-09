class Box < ApplicationRecord
    belongs_to :user
    validates :name, :size, :contents, presence: true
end
