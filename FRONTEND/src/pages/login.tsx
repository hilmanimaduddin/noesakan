import FormLogin from "../components/FormLogin";
import { Grid, GridItem } from "@chakra-ui/react";

export function Login() {
  return (
    <>
      <Grid   
      >
        <GridItem>
          <FormLogin />
        </GridItem>
      </Grid>
    </>
  );
}
