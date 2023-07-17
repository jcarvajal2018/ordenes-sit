/*
  Warnings:

  - You are about to drop the column `password` on the `Cliente` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "codigo" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "razonsocial" TEXT NOT NULL,
    "credito" INTEGER,
    "limite" INTEGER,
    "plazo" INTEGER,
    "saldo" INTEGER,
    "bloqueado" INTEGER
);
INSERT INTO "new_Cliente" ("bloqueado", "codigo", "credito", "id", "limite", "nombre", "plazo", "razonsocial", "saldo") SELECT "bloqueado", "codigo", "credito", "id", "limite", "nombre", "plazo", "razonsocial", "saldo" FROM "Cliente";
DROP TABLE "Cliente";
ALTER TABLE "new_Cliente" RENAME TO "Cliente";
CREATE UNIQUE INDEX "Cliente_codigo_key" ON "Cliente"("codigo");
CREATE UNIQUE INDEX "Cliente_nombre_key" ON "Cliente"("nombre");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
