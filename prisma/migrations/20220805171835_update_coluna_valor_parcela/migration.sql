/*
  Warnings:

  - You are about to alter the column `valor_parcela` on the `parcelas` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE `parcelas` MODIFY `valor_parcela` DECIMAL(65, 30) NOT NULL;
