import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
    @Prop()
    name: string;

    @Prop()
    primaryPhone: string;

    @Prop()
    secondaryPhone: string;

    @Prop()
    educationLevel: string;

    @Prop()
    email: string;

    @Prop()
    imageUrl: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);