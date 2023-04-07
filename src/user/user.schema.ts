import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({require:true})
    name:string;
    @Prop({require:true,unique:true})
    email:string;
    @Prop({require:true})
    password:string;
}

export const UserSchema = SchemaFactory.createForClass(User);