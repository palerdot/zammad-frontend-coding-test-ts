import { ref, onMounted } from 'vue'
import { useToast } from './useToast'

type Country = {
  code: string
  emoji: string
  name: string
  continent: {
    name: string
  }
  currency: string
}

const countries_payload = {
  operationName: 'listCountries',
  query: `
  query listCountries {
    countries {
      name
      code 
      emoji
    }
  }
  `,
}

const country_payload = (code: string) => ({
  operationName: 'listCountry',
  query: `
  query listCountry($code: ID!) {
    country(code: $code) {
      awsRegion
      name
      capital 
      code 
      continent {
        name
      }
      currency 
      emoji
    }
  }

  `,
  variables: {
    code,
  },
})

export function useCountries() {
  const { toast } = useToast()
  const countries = ref<Array<Country> | null>(null)

  onMounted(async () => {
    try {
      const response = await fetch('https://countries.trevorblades.com/', {
        method: 'POST',
        body: JSON.stringify(countries_payload),
        mode: 'cors',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const { data } = await response.json()
        countries.value = data.countries

        toast('Countries fetched successfully.')
      } else {
        throw 'Error fetching countries'
      }
    } catch (e) {
      // error toast
      toast('Error: fetching countries from graphql api')
      countries.value = []
    }
  })

  return { countries }
}

export function useCountry(code: string) {
  const { toast } = useToast()
  const country = ref<Country | null>(null)

  onMounted(async () => {
    try {
      const response = await fetch('https://countries.trevorblades.com/', {
        method: 'POST',
        body: JSON.stringify(country_payload(code)),
        mode: 'cors',
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const { data } = await response.json()
        country.value = data.country

        toast('Country fetched successfully.')
      } else {
        throw 'Error fetching country'
      }
    } catch (e) {
      // error toast
      toast('Error: fetching country from graphql api')
      country.value = null
    }
  })

  return { country }
}
