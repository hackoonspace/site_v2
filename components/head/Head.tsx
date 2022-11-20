import NextHead from 'next/head';

export default function Head() {
    return (
        <NextHead>
            <link rel="icon" href="/favicon.ico" />

            <title>HackoonWeek</title>
            <meta name="title" property="og:title" content='HackoonWeek'/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" name="description" content='Site da HackoonWeek, o evento anual realizado pela comunidade HackoonSpace'/>
            <meta name="image" property="og:image" content="/hackoonweek2021_logo.png"/>

            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content="@HackoonSpace"/>
            <meta name="twitter:creator" content="@HackoonSpace"/>
            <meta property="twitter:domain" content="hackoonweek.com"/>
            <meta property="twitter:url" content="https://hackoonweek.com"/>
            <meta name="twitter:title" content='HackoonWeek'/>
            <meta name="twitter:description" content='Site da HackoonWeek, o evento anual realizado pela comunidade HackoonSpace'/>
            <meta name="twitter:image:src" content="/hackoonweek2021_logo.png"/>

            <meta name="author" content="HackoonSpace"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </NextHead>
    );
}