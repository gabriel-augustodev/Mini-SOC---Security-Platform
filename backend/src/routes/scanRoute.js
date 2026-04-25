const express = require('express');
const router = express.Router();
const { runScan } = require('../services/scanService');

router.post('/', async (req, res) => {
  const { target } = req.body;

  if (!target) {
    return res.status(400).json({ error: 'Target é obrigatório' });
  }

  try {
    const result = await runScan(target);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Erro no scan' });
  }
});

module.exports = router;