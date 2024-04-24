import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

function convertBigIntToString(obj) {
   const newObj = {};
   for (const key in obj) {
      if (typeof obj[key] === 'bigint') {
         newObj[key] = obj[key].toString();  // Convert BigInt to string
      } else if (obj[key] !== null && typeof obj[key] === 'object') {
         newObj[key] = convertBigIntToString(obj[key]);  // Recursively process nested objects
      } else {
         newObj[key] = obj[key];
      }
   }
   return newObj;
}

export async function GET() {
   try {
      const actions = await prisma.action.findMany({
         include: {
            societe: true  // Include société details
         }
      });

      // Convert all BigInt fields to strings, including those in nested société objects
      const actionsString = actions.map(action => convertBigIntToString(action));

      return new NextResponse(JSON.stringify(actionsString), { status: 200, headers: { 'Content-Type': 'application/json' } });
   } catch (error) {
      console.error('Error fetching interlocuteurs:', error);
      return new NextResponse(JSON.stringify({ error: 'Failed to fetch interlocuteurs' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
   }
}
