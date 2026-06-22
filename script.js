let highestBid = 50000;
let highestBidder = "No Bids Yet";

function placeBid()
{
    let bidder =
        document.getElementById("bidderName").value;

    let bid =
        parseInt(
        document.getElementById("bidAmount").value);

    if(isNaN(bid))
    {
        alert("Enter Bid Amount");
        return;
    }

    if(bid > highestBid)
    {
        highestBid = bid;
        highestBidder = bidder;

        document.getElementById("highestBid")
        .innerHTML =
        "Current Highest Bid: ₹" + highestBid;

        alert("Bid Accepted");
    }
    else
    {
        alert("Bid must be greater than ₹"
               + highestBid);
    }
}

setTimeout(function(){

    document.getElementById("winner")
    .innerHTML =
    "Winner: " +
    highestBidder +
    " | Winning Bid: ₹" +
    highestBid;

},60000);