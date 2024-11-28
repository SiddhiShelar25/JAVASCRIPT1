// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

const userEmail = null

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}