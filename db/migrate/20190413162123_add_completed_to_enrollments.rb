class AddCompletedToEnrollments < ActiveRecord::Migration[5.2]
  def change
    add_column :enrollments, :completed, :boolean, :default => false
  end
end
