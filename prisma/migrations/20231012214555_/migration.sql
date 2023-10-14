-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pontuation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Pontuation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Pontuation" ("id", "quantity", "type", "userId") SELECT "id", "quantity", "type", "userId" FROM "Pontuation";
DROP TABLE "Pontuation";
ALTER TABLE "new_Pontuation" RENAME TO "Pontuation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
