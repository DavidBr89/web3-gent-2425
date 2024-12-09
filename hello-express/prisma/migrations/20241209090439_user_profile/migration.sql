/*
  Warnings:

  - A unique constraint covering the columns `[profileId]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `profileId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bio` VARCHAR(191) NOT NULL,
    `birthday` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `users_profileId_key` ON `users`(`profileId`);

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_profileId_fkey` FOREIGN KEY (`profileId`) REFERENCES `Profile`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
