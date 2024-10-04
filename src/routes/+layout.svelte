<script>
	import 'virtual:windi.css';
</script>
<!-- Bouton avec classe -->
<a href="https://www.cyclable.com/subventions-velo-aides-et-primes/" target="_blank" class="btn-subventions">
  Voir les aides disponibles
</a>

<!-- Contenu principal -->
<slot />

<style>
  /* Styles pour le bouton */
  .btn-subventions {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    margin: auto;
    padding: 10px 16px;
    font-size: 16px;
    line-height: 45px;
    text-transform: uppercase;
    background-color: #fff;
    color: #b5131d;
    border: 3px solid #b5131d;
    border-radius: 50px;
    text-decoration: none;
    transition: all 0.1s;
  }

  .btn-subventions:hover {
    background-color: #b5131d;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
  }
</style>
