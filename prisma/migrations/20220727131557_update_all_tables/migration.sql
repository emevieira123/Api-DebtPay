/*
  Warnings:

  - Added the required column `github_user` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `github_user` VARCHAR(191) NOT NULL;
