-- CreateTable
CREATE TABLE `RentPayment` (
    `id` VARCHAR(191) NOT NULL,
    `rentalContractId` VARCHAR(191) NOT NULL,
    `dueDate` DATETIME(3) NOT NULL,
    `paymentDate` DATETIME(3) NULL,
    `amount` DOUBLE NOT NULL,
    `status` ENUM('pendente', 'pago', 'atrasado') NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RentPayment` ADD CONSTRAINT `RentPayment_rentalContractId_fkey` FOREIGN KEY (`rentalContractId`) REFERENCES `RentalContract`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
