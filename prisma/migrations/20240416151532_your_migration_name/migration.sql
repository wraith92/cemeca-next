/*
  Warnings:

  - A unique constraint covering the columns `[siret]` on the table `Societe` will be added. If there are existing duplicate values, this will fail.
  - Made the column `siret` on table `Societe` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Societe` MODIFY `siret` BIGINT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Societe_siret_key` ON `Societe`(`siret`);
