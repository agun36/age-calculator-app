import { FormFieldSection } from "./components/formField/formfield"
import { SectionLayout } from "./components/section/sectionLayout"
import { ThemeProvider } from "./context/themeContext"

export const App = () => {
  return (
    <ThemeProvider>
      <div className="container d-flex justify-content-center align-items-center min-vh-100 app ">
        <div className="row app_row p-5">
          <div className="col-12 col-sm-10 col-md-8 col-lg-8">

            {/* formField */}
            <FormFieldSection />
            {/* section */}

            <SectionLayout />
          </div>

        </div>
      </div >
    </ThemeProvider>
  )
}