class AddContentToCourses < ActiveRecord::Migration[5.2]
  def change
    add_column :courses, :content, :string
  end
end
