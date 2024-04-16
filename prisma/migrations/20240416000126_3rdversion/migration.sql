/*
  Warnings:

  - Added the required column `dailyRate` to the `Equipment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Equipment" ADD COLUMN     "dailyRate" DOUBLE PRECISION NOT NULL;
