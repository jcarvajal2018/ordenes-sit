/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - You are about to alter the column `codiva` on the `Articulo` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `vendedor` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "ordenes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vendedor" INTEGER NOT NULL,
    "orden" INTEGER NOT NULL,
    "credito" INTEGER,
    "fecha" DATETIME NOT NULL,
    "cliente" INTEGER,
    "subtotal" REAL,
    "descuento" REAL,
    "exento" REAL,
    "impuesto" REAL,
    "servicio" REAL,
    "grabado" REAL,
    "total" REAL NOT NULL,
    "notas" TEXT
);

-- CreateTable
CREATE TABLE "ordenes_detalle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vendedor" TEXT NOT NULL,
    "orden" INTEGER NOT NULL,
    "articulo" TEXT NOT NULL,
    "exento" INTEGER,
    "cantidad" REAL NOT NULL,
    "precio" REAL,
    "descuento" REAL,
    "total" REAL,
    "hijo" INTEGER,
    "codiva" INTEGER NOT NULL,
    "combo" INTEGER,
    "codigopadre" TEXT,
    "equivalente" TEXT
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "vendedor" INTEGER NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_User" ("email", "id", "password") SELECT "email", "id", "password" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_vendedor_key" ON "User"("vendedor");
CREATE TABLE "new_Articulo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "articulo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "medida" TEXT,
    "barra" TEXT,
    "equivalente" TEXT,
    "grupoUnidad" INTEGER,
    "unidadGrupo" REAL,
    "tipoDescarga" INTEGER,
    "combo" INTEGER,
    "herencia" INTEGER,
    "existencia" INTEGER,
    "descuento" REAL,
    "precio1" REAL,
    "precio2" REAL,
    "precio3" REAL,
    "codiva" INTEGER NOT NULL,
    "piva" INTEGER NOT NULL
);
INSERT INTO "new_Articulo" ("articulo", "barra", "codiva", "combo", "descripcion", "descuento", "equivalente", "existencia", "grupoUnidad", "herencia", "id", "medida", "piva", "precio1", "precio2", "precio3", "tipoDescarga", "unidadGrupo") SELECT "articulo", "barra", "codiva", "combo", "descripcion", "descuento", "equivalente", "existencia", "grupoUnidad", "herencia", "id", "medida", "piva", "precio1", "precio2", "precio3", "tipoDescarga", "unidadGrupo" FROM "Articulo";
DROP TABLE "Articulo";
ALTER TABLE "new_Articulo" RENAME TO "Articulo";
CREATE UNIQUE INDEX "Articulo_articulo_key" ON "Articulo"("articulo");
CREATE UNIQUE INDEX "Articulo_descripcion_key" ON "Articulo"("descripcion");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
