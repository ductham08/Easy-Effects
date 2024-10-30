
app.get('/auth/callback', (req, res) => {
    const { code } = req.query;
    ShopifyAPI.exchange_temporary_token(req.query, (err, data) => {
        // data contains your access token
        res.send(data);
    });
});