-- CreateTable
CREATE TABLE `Societe` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `siret` BIGINT NULL,
    `siren` BIGINT NULL,
    `nom_soc` VARCHAR(191) NULL,
    `nom_responsable_soc` VARCHAR(191) NULL,
    `date_creation_soc` DATETIME(3) NULL,
    `activite_soc` VARCHAR(191) NULL,
    `libelle_naf` VARCHAR(191) NULL,
    `adresse_local` VARCHAR(191) NULL,
    `pays` VARCHAR(191) NULL,
    `ville_soc` VARCHAR(191) NULL,
    `code_postal` INTEGER NULL,
    `syndicat` VARCHAR(191) NULL,
    `observation` VARCHAR(191) NULL,
    `tel` VARCHAR(191) NULL,
    `app_sofitech` BOOLEAN NULL,
    `app_cemeca` BOOLEAN NULL,
    `soc_sofitech` BOOLEAN NULL,
    `soc_cemeca` BOOLEAN NULL,
    `origineprospect` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `id_utili` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Action` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date_action` DATETIME(3) NULL,
    `description` VARCHAR(191) NULL,
    `nom_interlocuteur` VARCHAR(191) NULL,
    `type_action` VARCHAR(191) NULL,
    `nom_societe` VARCHAR(191) NULL,
    `date_rdv` DATETIME(3) NULL,
    `validation` VARCHAR(191) NULL,
    `besoin` VARCHAR(191) NULL,
    `investissement` VARCHAR(191) NULL,
    `montant` VARCHAR(191) NULL,
    `date_factor` VARCHAR(191) NULL,
    `date_assur` VARCHAR(191) NULL,
    `nom_assur` VARCHAR(191) NULL,
    `nom_factor` VARCHAR(191) NULL,
    `credit_cop` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `id_soc` INTEGER NULL,
    `id_utili` INTEGER NULL,
    `interlocuteurId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Interlocuteur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NULL,
    `prenom` VARCHAR(191) NULL,
    `role` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `telephone` VARCHAR(191) NULL,
    `societeId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Societe` ADD CONSTRAINT `Societe_id_utili_fkey` FOREIGN KEY (`id_utili`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Action` ADD CONSTRAINT `Action_id_soc_fkey` FOREIGN KEY (`id_soc`) REFERENCES `Societe`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Action` ADD CONSTRAINT `Action_id_utili_fkey` FOREIGN KEY (`id_utili`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Action` ADD CONSTRAINT `Action_interlocuteurId_fkey` FOREIGN KEY (`interlocuteurId`) REFERENCES `Interlocuteur`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Interlocuteur` ADD CONSTRAINT `Interlocuteur_societeId_fkey` FOREIGN KEY (`societeId`) REFERENCES `Societe`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
