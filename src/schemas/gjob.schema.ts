import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { IsString } from 'class-validator';

export type GjobDocument = HydratedDocument<Gjob>;

@Schema()
export class Gjob {
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

    @IsString()
    imageUrl: string;

}

export const GjobSchema = SchemaFactory.createForClass(Gjob)
