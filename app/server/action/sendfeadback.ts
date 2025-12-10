"use server";
import { FeadBackSchema, FeadbackFormValues } from "@/app/server/schema/zodSchema";

export async function sendFeadback(values: FeadbackFormValues) {

    const result = FeadBackSchema.safeParse(values)

    if (!result.success) {
        return {
            status: "error",
            message: result.error.message,
        }
    }


    console.log(values.name, values.email, values.question, values.agreeToTerms);

    return {
        status: "success",
        message: "Feadback are send to the team!"
    }
}
