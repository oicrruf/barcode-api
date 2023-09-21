-- CreateTable
CREATE TABLE "item" (
    "id" SERIAL NOT NULL,
    "code" VARCHAR(16) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "detail" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);
