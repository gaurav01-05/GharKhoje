import express from 'express';
import dotenv from "dotenv";
import {PrismaClient} from "@prisma/client";

const app = express();


const prisma = new PrismaClient();

async function createUser(){

    const user =await prisma.user.create({
        data:{
            name:'Kamal',
            email:"xantosh232@gmai.com",
            password:"1234567"
        }
    });

    console.log(user);

    
}


createUser();
