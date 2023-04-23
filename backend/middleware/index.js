import bcrypt from "bcrypt";

export const hashData = async (data, salt = 10) => {
  try {
    const hashedData = await bcrypt.hash(data, salt);
    return hashedData;
  } catch (error) {
    throw error;
  }
};

export const compareData = async (unhashed, hash) => {
  try {
    const match = bcrypt.compare(unhashed, hash);
    return match;
  } catch (error) {
    throw error;
  }
};
