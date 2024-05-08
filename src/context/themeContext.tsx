import { createContext, useContext, useEffect, useState } from "react";

interface Age {
    years: number;
    months: number;
    days: number;
}

interface FormContextType {
    day: number | null;
    setDay: React.Dispatch<React.SetStateAction<number | null>>;
    month: number | null;
    setMonth: React.Dispatch<React.SetStateAction<number | null>>;
    year: number | null;
    setYear: React.Dispatch<React.SetStateAction<number | null>>;
    age: Age | null;
    setAge: React.Dispatch<React.SetStateAction<Age | null>>;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [day, setDay] = useState<number | null>(null);
    const [month, setMonth] = useState<number | null>(null);
    const [year, setYear] = useState<number | null>(null);
    const [age, setAge] = useState<Age | null>(null);

    useEffect(() => {
        if (day && month && year) {
            const currentDate = new Date();
            const birthDate = new Date(year, month - 1, day);
            let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
            let ageMonths = currentDate.getMonth() - birthDate.getMonth();
            let ageDays = currentDate.getDate() - birthDate.getDate();

            if (ageDays < 0) {
                ageDays += new Date(year, month - 1, 0).getDate();
                ageMonths--;
            }

            if (ageMonths < 0) {
                ageMonths += 12;
                ageYears--;
            }

            setAge({ years: ageYears, months: ageMonths, days: ageDays });
        }
    }, [day, month, year]);
    return (
        <FormContext.Provider value={{ day, setDay, month, setMonth, year, setYear, age, setAge }}>
            {children}
        </FormContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};