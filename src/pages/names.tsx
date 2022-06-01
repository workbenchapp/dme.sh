import * as React from "react";
import { Container, Spinner } from "react-bootstrap";
import { Heading } from "theme-ui";
import CardGroup from "react-bootstrap/CardGroup";
import * as web3 from "@solana/web3.js";
import * as splNameService from "@solana/spl-name-service";
import { Button } from "react-bootstrap";

import NameServiceAccountView from "../components/NameServiceAccount";

// Links to some docs:
// https://spl.solana.com/name-service
// https://solanacookbook.com/references/name-service.html#name-registry
// https://github.com/solana-labs/solana-program-library/tree/master/name-service/js/src
// https://github.com/Bonfida/solana-name-service-guide
// https://github.com/solana-labs/solana/blob/master/explorer/src/utils/name-service.tsx

// solana.sol owned by BriW4tTAiAm541uB2Fua3dUNoGayRa8Wt7pZUshUbrPB
// lots of domains owned by 33m47vH6Eav6jr5Ry86XjhRft2jRBLDnDgPSHoquXi2Z
// daonetes.sol == 3nUxx7sMEcoKAgALW37JHg6cF7X5UAxinJBys3pnxtmy
// owned by Ld8u5TPGyduTpFoTAn6WGDis2yAGAd3hXqi2gUeiu4d
// NameServiceProgram = namesLPneVptA9Z5rqUDD9tMTWEJwofgaYwp8cawRkX

interface ProgramAccount {
  pubkey: web3.PublicKey;
  account: web3.AccountInfo<Buffer | web3.ParsedAccountData>;
  // publicKey: web3.PublicKey;
  // accountInfo: web3.AccountInfo<Buffer>;
}

const NamesPage = () => {
  const [accounts, setAccounts] = React.useState<ProgramAccount[]>([]);
  const [buttonUsed, setButtonUsed] = React.useState<boolean>(false);
  const [waitingForRequest, setWaitingForRequest] =
    React.useState<boolean>(false);

  const userAccount = new web3.PublicKey(
    "Ld8u5TPGyduTpFoTAn6WGDis2yAGAd3hXqi2gUeiu4d"
  );

  return (
    <Container>
      <Heading>
        Name service accounts{" "}
        <Button
          disabled={buttonUsed}
          onClick={() => {
            const connection = new web3.Connection(
              web3.clusterApiUrl("mainnet-beta"),
              "confirmed"
            );
            setButtonUsed(true);
            setWaitingForRequest(true);

            const filters = [
              {
                memcmp: {
                  offset: 32,
                  bytes: userAccount.toBase58(),
                },
              },
            ];

            connection
              .getParsedProgramAccounts(splNameService.NAME_PROGRAM_ID, {
                filters,
              })
              //</Heading>splNameService.getFilteredProgramAccounts(connection, splNameService.NAME_PROGRAM_ID, {filters})
              .then((accountsRes) => {
                setWaitingForRequest(false);
                console.log("Got Account: ", JSON.stringify(accounts));
                setAccounts(accountsRes);
              })
              .catch((e) => {
                setWaitingForRequest(false);
                console.log(e);
              });
          }}
        >
          Request accounts
          {waitingForRequest ? <Spinner animation="border" /> : ""}
        </Button>
      </Heading>
      <CardGroup>
        {accounts.slice(0, 4).map((account: ProgramAccount) => {
          return (
            <NameServiceAccountView
              key={account.pubkey.toString()}
              account={account}
            ></NameServiceAccountView>
          );
        })}
      </CardGroup>
    </Container>
  );
};

export default NamesPage;
