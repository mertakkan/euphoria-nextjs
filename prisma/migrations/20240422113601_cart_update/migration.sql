/*
  Warnings:

  - Added the required column `image` to the `cart_items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `cart_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart_items` ADD COLUMN `image` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `title` VARCHAR(191) NOT NULL DEFAULT '';
