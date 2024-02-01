import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 5

export default function Home({}) {
  return (
    <>
      <div className="dark:divide-gray-1000 divide-y divide-gray-200">
        <div className="space-y-2 pb-4 pt-6 md:space-y-8">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Deneme 1 2
          </h1>
          <div className="space-y-2 pb-4 pt-6 md:space-y-8">
            <h2>
              "Eyleme geçme kararlılığı olmayınca insan körelerek bir homo laborans'a dönüşür.
              Doğmuş olmak, fırlatılmış olmak değil, eyleme geçebilmektir." (Olma Sanatı)
            </h2>

            <h3>
              "İtaat ettiğinin bile farkında değilken kim itaatsizlik edebilir?" (İtaatsizlik
              Üzerine, Sf. 26)
            </h3>

            <h2>
              "... itaatsizlik, mantığın ve iradenin olumlanması eylemidir. Bu aslında, bir şeye
              karşı değil, bir şeye yönelik bir tutumdur: insanın görebilme, gördüğünü söyleyebilme
              ve görmediği şeyi söylemeyi reddetme yeteneğine yöneliktir. Bunu yapabilmek için
              saldırgan ya da isyankar olması gerekmez; gözünü açmaya, tamamen uyanık olmaya ve yarı
              uykuda oldukları için yok olma tehlikesiyle karşı karşıya olanların gözünü açma
              sorumluluğunu taşımaya istekli olması gerekir." (İtaatsizlik Üzerine, Sf. 27)
            </h2>

            <h2>
              "Zamanın eskiye göre kayda değer şekilde daha hızlı ilerlediği izleniminin kökeninde
              de bugün bulunma becerisinin kaybedilmiş olması, sürem deneyiminin nadirliği vardır.
              Acele ettirilmesi hissinin "kaçırma korkusunun sonucu" olduğu varsayımı yanlıştır:
              "(Değerli) şeyleri kaçırma korkusu ve bunun sonucunda, hayatın temposunu artırma
              arzusu... erken modern dönemde gelişmeye başlayan ve kişinin 'dünyevi seçeneklerin
              tadını çıkaran' bir hızlanma -yani, deneyim oranını yükseltme- sayesinde hayatını daha
              tam ve zengin bir deneyim haline getireceğini ve böylece 'iyi hayat'ı
              gerçekleştireceğini varsayan kültürel programın sonucudur. Kültürel hızlanma vaadinin
              temelinde bu fikir vardır. Bunun sonucunda, özne daha hızlı yaşamak ister." Oysa
              gerçekte tam tersi geçerlidir. Daha hızlı yaşamaya çalışan herkes nihayetinde daha
              hızlı ölecektir. Hayatı daha doyurucu hale getiren şey olayların toplam miktarı değil,
              sürem deneyimidir. Bir olayın diğerinin hemen ardından geldiği yerde, kalıcı hiçbir
              şey meydana gelmez. Tamamlanma ve anlam nicelikten yola çıkarak açıklanamaz. Hızla
              yaşanan ve hiçbir şeyin uzun kalmadığı, yavaş hiçbir şey içermeyen bir hayat, "deneyim
              oranı" ne kadar yüksek olursa olsun, kısa bir hayattır. Geleceğin temposu nasıl
              olacak? Hacılık veya uygun adım ilerleme çağı kesinlikle sona erdi. İnsanoğlu, kısa
              bir dolanıp durma döneminden sonra, bir yürüyüşçü olarak dönecek mi yeryüzüne? Yoksa
              yerçekimini ve çalışmanın bütün ağırlığını ardında bırakarak süzülmenin hafifliğini,
              boş zamanda süzülerek gezinmenin, bir başka deyişle, süzülen zamanın kokusunu
              keşfedecek mi?" (Zamanın Kokusu??)
            </h2>

            <h2>"Önemli olan düşüş değil, yere çarpıştır." (La Haine)</h2>

            <h2>
              "Salt hedefe yönelmişlik, hedefe varmak için aşılması gereken mekansal aralığı
              olabildiğince hızlı aşılması gereken bir engele dönüştürür. Salt hedefe yönelmek
              aradaki mekanı bütün anlamından yoksun bırakır. İçini boşaltarak kendi başına bir
              değeri olmayan bir koridora çevirir. Mekansal aralığı aşmak için gerekli olan zamansal
              aralığın tamamen ortadan kaldırılması girişimidir hızlanma. Yolun zengin semantiği
              ortadan kalkar. Yolun bir kokusu yoktur artık. Hatta yol da ortadan kalkar. Hızlanma
              dünyanın semantik açıdan kısırlaşmasına yol açar. Mekan ve zaman artık çok da anlamlı
              değildir."
            </h2>

            <img
              src="/static/images/closeness.jpg" // Change this to the path of your image
              alt="What is this"
              className="mx-auto w-1/2 object-cover" // Tailwind CSS classes for styling
            />
          </div>
        </div>
      </div>
    </>
  )
}
