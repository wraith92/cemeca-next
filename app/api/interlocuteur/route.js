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
      const interlocuteurs = await prisma.interlocuteur.findMany({
         include: {
            societe: true  // Include société details
         }
      });
   
      // Convert all BigInt fields to strings, including those in nested société objects
      const interlocuteursString = interlocuteurs.map(interlocuteur => convertBigIntToString(interlocuteur));
   
      return new NextResponse(JSON.stringify(interlocuteursString), { status: 200, headers: { 'Content-Type': 'application/json' }});
   } catch (error) {
      console.error('Error fetching interlocuteurs:', error);
      return new NextResponse(JSON.stringify({ error: 'Failed to fetch interlocuteurs' }), { status: 500, headers: { 'Content-Type': 'application/json' }});
   }
}
