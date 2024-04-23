-- AlterTable
ALTER TABLE `Interlocuteur` ADD COLUMN `id_utili` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Interlocuteur` ADD CONSTRAINT `Interlocuteur_id_utili_fkey` FOREIGN KEY (`id_utili`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
