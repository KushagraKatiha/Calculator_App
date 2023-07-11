import "./App.css";
import About from "./components/About";
import Heading from "./components/Heading";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
   < Router>
    <>
      <Navbar />
        <Routes>
          <Route
            exact
            path="/about"
            element={
              <div className="flex flex-col gap-5 w-screen">
                <Heading title="About Developer" />

              <div className="md:flex md:justify-center md:w-[50%] md:h-[50%] md:mt-14 md:ml-[25%]">
                <div className="flex flex-col gap-5 md:grid md:grid-cols-2">
                  <About
                    className="row-start-1 row-end-2"
                    name="Kushagra Katiha"
                    about="This app is made my me, I am currently a 3rd year B.Tech student who is passionate about learning new things."
                    image="https://media.licdn.com/dms/image/D4D03AQH2bP5LIs6oJg/profile-displayphoto-shrink_400_400/0/1673461504984?e=1694649600&v=beta&t=6WOq-yEkogzWTTa86ZMP8e-0y21RQ4hV_xl89MnG3GY"
                  />

                  <About
                    btnLink="https://www.linkedin.com/in/kushagrakatiha/"
                    name="LinkedIn"
                    about="You can follow me on LinkedIn to get connected."
                    buttonText="Follow on LinkedIn"
                    image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAYFBMVEUBAQH///8AAADh4eEcHBy/v79lZWXDw8Pz8/Ourq4+Pj4jIyPX19d6enpubm6GhoZgYGA4ODjn5+fOzs6goKAsLCyMjIxKSkpbW1uoqKjt7e1QUFCAgIAKCgqUlJS0tLTz9GbjAAAEVUlEQVRoge2b65riIAyGS7QHbT30oD1N9f7vcqC2SknoqAN0n1nzw2ctyrthPkkI4DHFmrDelTF45gxgXe4Lv1FJjHmTd5FfdiDMIFvQhXXbazQDj4r0QYb7i/TPF5rQe26nS6ODh6lpl1Xj+CsNP9hG3/ABAY9S++QbPV6p8Gzthi3wXT6FR+7YnL5OJnA+5m9J+gW1y01pI8EPDv3u6dUDHjpmc9VtRrgroU/o0QAvHPy+Ef1wgw+OuxSccL3p4f4CjnN60cPLJdgetALedMvAgc+yXrjIqHN6zeE1it/jeyK0GxMcf+HhzduRjoNkv/NQZ1ByOKk3jgw2YZ6HdWWLDmnEPCpXHKe/PuCd7dAhzphHsatJppdYibewXjHqccWmZiXTGOCKGMV4KCZ+jsbVTnoufoCqVeZdJ+HQqak9NwvzPw3fYzZjruBnCm5ecqTg+liHrAUngtPBzfk8cEj4Ycm/uTrFCItcwWGF4bUjuAdfGH6yNsmo0yvkKvsCFpIJTWDplIHf2AiqGjj3PZTZdgK6Ds7p1Yhv6s5SMqGDizQqbr8u5/12bS2NIgX3KB6N+aOd7FXruQP7wA32+PxSQyc4ymaaQGpK22MQBMf2NDx+OYFcb5GdxlVbjNvSEd5V12SsrTbJpp3/lWrgRBKXj3Aix8q6W0Q4q9EwK+boz8PHdTSVaaw6saCtiHK6iEhauhl4JoaXyPVv/zNtpcsc/IofDxZVGuc18ZyGwwx8g58+rKVLDG94TmQ5DZ1yPoxOg8zAs3aezVbUMtwUHC1qVdu8AA/w1+fgTxi15NAIjobDL+AhkRU485xtsevu4PWS8MgyPKl3VXD2ibKGMCw5g/CkHUJ7TM/yeEPBnNr9e5kW4EJ9IB87eLy87vlOx5a+T0UZvMY2BZ+W7EVRFZs1eDDpGMAnPoPqy4bgieIV1QFDlfU3BEfBD0qKClti3M/vCy6f81zNlES3yIr3h30WriYLRGmDmGDNwCO0XUDBUUy3Bg/xp3TwJwSXzwhugMu9kHArgvud5x/4/wf/qP0Dn4MT6zh3gtPDHQjOuOf/Ojz5m/AnBJcsKbg/OuyvwIm2D/w9+Ctq18MdqP1vDfuCcPWhB0eHcLUcroFbERw6AePKc3EkDRdLHMHFYbz9UnBxDBHXK8rQVyy8n9LEbf4V/+EK3AM6SC589PCBL+2O5Q9t8x0gSi0dupV0SH5zaKfakNrJHqZqB0jEcWOiEO/A+nqZx67LwMWurMciC8d/fmYPR8z78z/O4f2ij8Ob3nVl9nvvCMizH7053l+ouLo+6D3uCPRXSQLX8JQ94Mzo5bif2SBfotHstVpjj7XZ4eLUcJjaheCkovR4ZSxJ3agO5IL4/bJcoztfYJidSic7pGuCGyJAmUZPd90mFyQPVIA0SIad9oKkGPuiJeOhEdue1bM0nvKereqgTOO1UYvT8lgneM8Jwfvxz1ZGLdPsLZNwV/YNsI1C3FZyGhoAAAAASUVORK5CYII="
                  />

                  <About
                    btnLink="https://github.com/KushagraKatiha"
                    name="GitHub"
                    about="You can follow me on GitHub to get connected"
                    buttonText="Follow on GitHub"
                    image="data:image/png;base64,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"
                  />

                  <About
                    btnLink="https://www.instagram.com/kushagra_katiha/"
                    name="Instagram"
                    about="Follow me instagram to get connected"
                    buttonText="Follow on Instagram"
                    image="data:image/png;base64,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"
                  />
                </div>
                </div>
              </div>
            }
          ></Route>

          <Route
            exact
            path="/home"
            element={
              <div>
                <Heading title="Calculator" />
                <Main />
              </div>
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              <div>
                <Heading title="Calculator" />
                <Main />
              </div>
            }
          ></Route>
        </Routes>
    </>
    </ Router>
  );
}

export default App;
