/*
  Warnings:

  - You are about to alter the column `cliente` on the `Cliente` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cliente" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "razonsocial" TEXT NOT NULL,
    "credito" INTEGER,
    "limite" INTEGER,
    "plazo" INTEGER,
    "saldo" INTEGER,
    "bloqueado" INTEGER
);
INSERT INTO "new_Cliente" ("bloqueado", "cliente", "credito", "id", "limite", "nombre", "plazo", "razonsocial", "saldo") SELECT "bloqueado", "cliente", "credito", "id", "limite", "nombre", "plazo", "razonsocial", "saldo" FROM "Cliente";
DROP TABLE "Cliente";
ALTER TABLE "new_Cliente" RENAME TO "Cliente";
CREATE UNIQUE INDEX "Cliente_cliente_key" ON "Cliente"("cliente");
CREATE UNIQUE INDEX "Cliente_nombre_key" ON "Cliente"("nombre");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
