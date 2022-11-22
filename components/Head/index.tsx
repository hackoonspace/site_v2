import NextHead from 'next/head';

export default function Head() {
    return (
        <NextHead>
            <link rel="icon" href="/favicon.ico" />

            <title>HackoonSpace</title>
            <meta name="title" property="og:title" content='HackoonSpace'/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" name="description" content='Site do HackoonSpace, o primeiro hackerspace e comunidade hacker da UFSCar Sorocaba'/>
            <meta name="image" property="og:image" content="/HackoonLogo.png"/>

            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content="@HackoonSpace"/>
            <meta name="twitter:creator" content="@HackoonSpace"/>
            <meta property="twitter:domain" content="hackoonspace.com"/>
            <meta property="twitter:url" content="https://hackoonspace.com"/>
            <meta name="twitter:title" content='HackoonSpace'/>
            <meta name="twitter:description" content='Site da HackoonWeek, o primeiro hackerspace e comunidade hacker da UFSCar Sorocaba'/>
            <meta name="twitter:image:src" content="/HackoonLogo.png"/>

            <meta name="author" content="HackoonSpace"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </NextHead>
    );
}