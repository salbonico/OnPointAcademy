class CourseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :teacher_id, :content
  belongs_to :teacher
end
