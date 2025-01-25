/*
  Warnings:

  - You are about to drop the column `customerEligibility` on the `Discount` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "EligibilityCriteria" AS ENUM ('ALL', 'NEW_CUSTOMERS', 'RETURNING_CUSTOMERS', 'SPECIFIC_CUSTOMERS');

-- AlterTable
ALTER TABLE "Discount" DROP COLUMN "customerEligibility",
ADD COLUMN     "eligibilityCriteria" "EligibilityCriteria"[];

-- AlterTable
ALTER TABLE "ShippingAddress" ALTER COLUMN "orderId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "image" SET DEFAULT 'https://i.ibb.co/BVsM1f6/product-placeholder.jpg';

-- DropEnum
DROP TYPE "CustomerEligibility";
