-- CreateTable
CREATE TABLE `parcelas` (
    `id` VARCHAR(191) NOT NULL,
    `valor_parcela` INTEGER NOT NULL,
    `dia_vencimento` INTEGER NOT NULL,
    `status` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `id_user` VARCHAR(191) NOT NULL,
    `id_debt` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `parcelas` ADD CONSTRAINT `parcelas_id_user_fkey` FOREIGN KEY (`id_user`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `parcelas` ADD CONSTRAINT `parcelas_id_debt_fkey` FOREIGN KEY (`id_debt`) REFERENCES `debt`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
