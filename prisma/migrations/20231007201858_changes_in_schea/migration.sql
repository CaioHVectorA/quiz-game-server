/*
  Warnings:

  - You are about to drop the `Guess` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `answers` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Guess_username_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Guess";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "password" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isGuest" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("id", "password", "username") SELECT "id", "password", "username" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
CREATE TABLE "new_Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "answers" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);
INSERT INTO "new_Question" ("body", "id", "type") SELECT "body", "id", "type" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
CREATE TABLE "new_Pontuation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Pontuation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Pontuation" ("id", "quantity", "type", "userId") SELECT "id", "quantity", "type", "userId" FROM "Pontuation";
DROP TABLE "Pontuation";
ALTER TABLE "new_Pontuation" RENAME TO "Pontuation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
