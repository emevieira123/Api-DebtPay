/*
  Warnings:

  - Added the required column `qtde_parcelas` to the `parcelas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `parcelas` ADD COLUMN `qtde_parcelas` INTEGER NOT NULL;
