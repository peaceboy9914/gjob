import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type GjobDocument = HydratedDocument<Gjob>;

@Schema()
export class Gjob {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    phone: string;

    @Prop({required: true})
    email: string;
}

export const GjobSchema = SchemaFactory.createForClass(Gjob)
