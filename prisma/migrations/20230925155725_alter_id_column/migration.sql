/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `item` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "item_id_key" ON "item"("id");
