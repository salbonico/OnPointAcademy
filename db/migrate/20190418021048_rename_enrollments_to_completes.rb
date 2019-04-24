class RenameEnrollmentsToCompletes < ActiveRecord::Migration[5.2]
  def change
    rename_table :enrollments, :completes
  end
end
