"use server"

export const saveToDb = async (formData) => {
    console.log(formData) // ovde treba dodati logiku gde cuvamo u bazu
    // kada se sacuva u bazi, da bi refreshovao stranicu
    // treba dodati
    // revalidatePath('/putanja-ka-stranici') --> ovo ce refreshovati stranicu cak iako je cashirana
}