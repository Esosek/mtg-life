<script lang="ts">
  import config from '../config.svelte'
  import csFlag from '../../assets/flags/flag_cs.png'
  import enFlag from '../../assets/flags/flag_en.png'

  function setLanguage(lang: 'en' | 'cs') {
    config.language = lang
  }
</script>

<button onclick={() => setLanguage(config.language === 'en' ? 'cs' : 'en')} class="size-8 rounded-full ml-auto block"
  ><img
    src={config.language === 'en' ? csFlag : enFlag}
    alt={`${config.language === 'en' ? 'Czech' : 'United Kingdom'} flag`}
  /></button
>
